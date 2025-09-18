// backend/utils/timetableGenerator.js

function generateTimetable(teachers, subjects, classrooms) {
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    const periodsPerDay = 8;

    const timetable = {};
    const teacherUsage = {};
    const classroomUsage = {};

    // Initialize timetable and usage trackers
    days.forEach(day => {
        timetable[day] = Array(periodsPerDay).fill(null);
        teacherUsage[day] = {};
        classroomUsage[day] = Array(periodsPerDay).fill(null);
    });

    // Shuffle array helper (to randomize assignments and balance)
    function shuffleArray(arr) {
        return arr.sort(() => Math.random() - 0.5);
    }

    subjects.forEach(subject => {
        const teacher = teachers.find(t => t._id.toString() === subject.assignedTeacher.toString());
        if (!teacher) return;

        let periodsLeft = subject.periodsPerWeek;

        // Shuffle days to distribute subjects across the week
        const shuffledDays = shuffleArray([...days]);

        outer: for (const day of shuffledDays) {
            for (let period = 0; period < periodsPerDay; period++) {

                // Check if teacher is available and not overloaded
                const teacherDayUsage = Object.values(teacherUsage[day]).filter(tid => tid === teacher._id.toString()).length;
                const maxPerDay = 4; // adjust if needed

                const isTeacherAvailable = !teacher.availability.some(a => a.day === day && a.period === period + 1)
                    && teacherDayUsage < maxPerDay;

                if (!isTeacherAvailable) continue;

                // Find a free classroom
                const freeClassroom = classrooms.find(c => !classroomUsage[day][period] || classroomUsage[day][period] !== c._id.toString());
                if (!freeClassroom) continue;

                // Assign class
                timetable[day][period] = {
                    subject: subject.name,
                    teacher: teacher.name,
                    classroom: freeClassroom.name
                };

                // Mark usage
                teacherUsage[day][period] = teacher._id.toString();
                classroomUsage[day][period] = freeClassroom._id.toString();

                periodsLeft--;
                if (periodsLeft <= 0) break outer;
            }
        }
    });

    return timetable;
}

module.exports = generateTimetable;

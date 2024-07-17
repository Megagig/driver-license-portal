import { getTomorrowsDate } from "./pages/appointment/utils"

export const getAppointment = async (id) => {
    return {
        first_name: 'John',
        last_name: 'Doe',
        middle_name: 'Oxen',
        email: 'john96@gmail.com',
        phone_number: '08054321098',
        nin: 2714679806,
        state_of_residence: "Lagos",
        local_govt_area: "Mainland",
        application_id: "QWSERT-12345-12GH90",
        capture_center: "Beside FO filling station, Unilag Premise, Lagos Mainland, Lagos.",
        appointment_date: getTomorrowsDate(),
        appointment_time: "10:00 AM"
    }
}
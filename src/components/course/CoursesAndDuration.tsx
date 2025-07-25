import type {FC} from "react";
import CourseAndDuration from "./CourseAndDuration.tsx";
import {coursesAndDuration} from "../../data/coursesAndDuration.ts";

const CoursesAndDuration: FC = () => {
    return (
        <>
            {
                coursesAndDuration.map((course, index) => <CourseAndDuration key={index} course = {course} />)

            }
        </>
    );
};

export default CoursesAndDuration;
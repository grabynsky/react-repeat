import {coursesAndDuration} from "../data/coursesAndDuration.ts";
import type {FC} from "react";
import CourseAndDuration from "./CourseAndDuration.tsx";

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
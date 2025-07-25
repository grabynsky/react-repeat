import type {FC} from "react";
import {coursesTitle} from "../../data/coursesTitle.ts";

const CoursesTitle: FC = () => {
    return (
        <>
            <ul>
                {
                    coursesTitle.map((courseTitle, index) => (<li key={index}>{courseTitle}</li>))
                }
            </ul>
        </>
    );
};

export default CoursesTitle;
import type {FC} from 'react';
import type {ICoursesAndDuration} from "../models/ICoursesAndDuration.ts";
import styles from "./module-css/coures.module.css"

type Props = {
    course: ICoursesAndDuration;
}
const CourseAndDuration: FC<Props> = ({course: {monthDuration, title}}) => {
    return (
        <>
            <p className={styles.par}>{title} - {monthDuration}</p>
        </>
    );
};

export default CourseAndDuration;
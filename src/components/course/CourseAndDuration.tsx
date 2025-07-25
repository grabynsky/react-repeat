import type {FC} from 'react';
import styles from "./module-css/coures.module.css"
import type {ICoursesAndDuration} from "../../models/ICoursesAndDuration.ts";

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
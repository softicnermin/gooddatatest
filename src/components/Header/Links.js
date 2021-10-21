import React from "react";
import cx from "classnames";
import { NavLink } from "react-router-dom";

import styles from "./Header.module.scss";

const Links = () => {
    return (
        <>
            <NavLink
                to="/welcome"
                className={cx(styles.Link, "s-welcome-link")}
                activeClassName={styles.LinkActive}
            >
                Welcome
            </NavLink>
            <NavLink to={"/"} className={styles.Link} activeClassName={styles.LinkActive} exact>
                Home
            </NavLink>
            <NavLink to={"/example"} className={styles.Link} activeClassName={styles.LinkActive} exact>
                Example
            </NavLink>
            <NavLink to={"/example-map"} className={styles.Link} activeClassName={styles.LinkActive} exact>
                Example map
            </NavLink>
            <NavLink to={"/example-map2"} className={styles.Link} activeClassName={styles.LinkActive} exact>
                Example map2
            </NavLink>
        </>
    );
};

export default Links;

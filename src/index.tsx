import * as React  from "react";
import * as ReactDOM  from "react-dom";
import { Task } from "./web/components/task";
import "./web/styles/styles.scss"
const ROOT = document.querySelector(".container");

ReactDOM.render(<Task />, ROOT)
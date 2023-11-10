import className from "classnames";
import { twMerge } from "tailwind-merge";

function Button ({
    children, primary, danger, ...rest
}){
    const classes = twMerge(className(rest.className,'flex items-center px-3 py-1.5 border',{
        'border-blue-500 bg-blue-500 text-blue rounded bg-white': primary, 
        'border-red-500 bg-red-500 text-blue rounded bg-white':danger
    }));
    return <button {...rest} className={classes}>{children}</button>
};
export default Button;
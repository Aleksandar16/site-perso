import React, {useEffect, useState} from 'react';

function Text(props) {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimate(true);
        }, props.delay);

        return () => clearTimeout(timer);
    }, [props.delay]);

    return (
        <div className={`transition-all ease-in duration-500 transform w-full
        ${animate ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <p className={props.class}>{props.name}</p>
        </div>
    );
}

export default Text;

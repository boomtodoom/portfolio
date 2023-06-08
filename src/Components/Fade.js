import React from 'react';

export function FadeInSection(props) {
    const [isVisible, setVisible] = React.useState(false);
    const domRef = React.useRef();
    let options = {
        threshold: 0.4
    };

    React.useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setVisible(entry.isIntersecting));
        }, options);

        observer.observe(domRef.current);

        return () => observer.unobserve(domRef.current);
    }, []);

    const childrenWithDelay = React.Children.map(props.children, (child, index) => {
        const delay = `${index * 200}ms`; // Adjust the delay value as needed
        const childClassName = isVisible ? 'is-visible' : 'not-visible';

        return React.cloneElement(child, {
            className: `${child.props.className} ${childClassName}`,
            style: {
                transitionDelay: delay
            }
        });
    });

    return (
        <div className="fade-in-section" ref={domRef}>
            {childrenWithDelay}
        </div>
    );
}

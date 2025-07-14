import './Container.css'

export default function Container({ children, title, gridContainer }){
    const classes = 'container ' + gridContainer

    return (
        <div className={classes}>
            <h1>
                {title}
            </h1>
            {children}
        </div>
    )
}
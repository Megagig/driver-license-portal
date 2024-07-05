

const Logo = ({ container, h1Style, pStyle }) => {
    return (
        <div className={container}>
            <h1 className={h1Style}>ACME</h1>
            <p className={pStyle}>Drivers Lincese Portal</p>

        </div>
    )
}

export default Logo
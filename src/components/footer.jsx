function MyFooter(props) {
    return (
        <div className="flex-grow-1 p-3" id="footer">
            <ul>
                <li>
                    <a href="https://github.com/sluhtala" className="m-1">
                        Github
                    </a>
                </li>
                <li>
                    <a href="CV.pdf" className="m-1">
                        CV
                    </a>
                </li>
                <li>
                    <a href="https://hive.fi" className="m-1">
                        hive.fi
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default MyFooter;

import React, { useCallback, useEffect, useState } from "react";
import './Table.scss';
import axios from "axios";


function Table(){

    const [tableData, setTableData] = useState(null);
    const usesProps = ["author", "language", "title", "summary", "crawled", 
                        "keywords", "published", "originId", "fingerprint", 
                        "id", "canonicalUrl", "unread"];

    const languages = {
        'en' : 'English'
    }

    const fetchData = useCallback(async () => {
        const url = "/https://www.fca.org.uk/news/rss.xml&unreadOnly=False";

        axios(url)
            .then(res=> {
                const {items} = res.data;
                const selectedData = items.map(({author, language, title, summary, crawled, 
                keywords, published, originId, fingerprint, 
                id, canonicalUrl, unread}) => {return {author, language, title, summary, crawled, 
                keywords, published, originId, fingerprint, 
                id, canonicalUrl, unread}})
                    setTableData(selectedData);
                console.log(res);
            }).catch(e => console.log(e))

            console.log(res);
    }, [usesProps]);

    const getFormatColumnHeader = useCallback((propName) => {
        const capitalize = (word) => word.charAt(0).toUpperCase() + word.substring(1);
        var words = propName.match(/[A-Za-z][a-z]*/g) || [];
        return words.map(capitalize).join(" ");
    });

    const getFormatColumnContent = useCallback((content) => {
        if (Array.isArray(content))
            return content.join(', ');
        else if (content.content)
            return content.content;
        else if (typeof content === "boolean")
            return content ? "Yes" : "No"
        else if (Object.keys(languages).includes(content))
            return languages[content];
        return content.toString();
    });

    useEffect(()=>{
        fetchData();
    }, []);

    return tableData ? (
            <div className="Table-wrapper">
                <table className="Table-Table">
                    <thead>
                        <tr>
                            {usesProps.map(key => <th>{getFormatColumnHeader(key)}</th>)}
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map(item => 
                            (<tr>
                                {Object.values(item).map(value =>
                                    (<td>{getFormatColumnContent(value)}</td>)
                                    )}
                            </tr>)
                            )}
                    </tbody>
                </table> 
            </div>
        ) : (<div><h1>Не получилось</h1></div>);
}

export default Table; 
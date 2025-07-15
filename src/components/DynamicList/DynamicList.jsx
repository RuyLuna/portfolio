import './DynamicList.css'

export default function DynamicList({ list }){
    return <div className="DynamicList">
        {list.map((item, key) => {
            return <div className="DynamicList-Item" key={key}>
                <h2>{item.header}</h2>
                <p>
                    {item.text}
                </p>
            </div>
        })}
    </div>
}
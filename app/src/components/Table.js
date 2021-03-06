// Styles
import "../App.css";

export const Table = (props) => {
  const { data } = props;
  const headers =
    data != null && data.length >= 1 ? Object.keys(data[0]) : null;

  return headers ? (
    <div className="table">
      <div className="tableRow">
        {headers.map((header) => (
          <div className="cell cellHeader">
            <p className="cellText cellTextHeader">{header}</p>
          </div>
        ))}
      </div>
      {data.map((row) => (
        <div className="tableRow">
          {headers.map((header) => (
            <div className={`cell cell${data.indexOf(row) % 2}`}>
              <p className="cellText">{row[header]}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  ) : null;
};

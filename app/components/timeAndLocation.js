export default function TimeAndLocation() {

    let now = new Date();

    let options = {
        timeZone: 'Australia/Sydney',
        hour: 'numeric',
        minute: 'numeric',
        hour12: false,
    };

    let formatter = new Intl.DateTimeFormat('en-AU', options);
    let formattedTime = formatter.format(now);
    let finalOutput = `AEST ${formattedTime}`;

    return (
        <>
            <div className="timeAndLocationContainer">
                <p className="timeText">28.0167° S, 153.4000° E</p>
                <p className="timeText">{finalOutput}</p>
            </div>
        </>
    )
}
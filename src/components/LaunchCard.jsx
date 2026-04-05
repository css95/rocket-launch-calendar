import './LaunchCard.css'

function LaunchCard({ launch }) {

    return (
        <div className="launch-card">
            <h2>{launch.name}</h2>
            <p>{launch.net}</p>
            <p>{launch.status?.name}</p>
            <p>{launch.mission?.description}</p>
            <p>{launch.pad?.location?.name}</p>
        </div>
    )

}

export default LaunchCard

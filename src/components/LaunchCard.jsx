import './LaunchCard.css'

function LaunchCard({ launch }) {

    return (
        <div className="launch-card">
            <div className="launch-card__info">
                <h2>{launch.name}</h2>
                    <p className="launch-card__date">{launch.net}</p>
                    <p className="launch-card__status">{launch.status?.name}</p>
                    <p className="launch-card__description">{launch.mission?.description}</p>
                    <p className="launch-card__location">{launch.pad?.location?.name}</p>
                </div>
                <img src={launch.image?.image_url} alt={launch.name} />
        </div>
    )

}

export default LaunchCard

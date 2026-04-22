import './LaunchCard.css'

function LaunchCard({ launch }) {

    const launchDate = new Date(launch.net).toLocaleString('en-GB', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                    })

    return (
        <div className="launch-card">
            <div className="launch-card__info">
                <h2>{launch.name}</h2>
                    <p className="launch-card__date">{launchDate}</p>
                    <p className="launch-card__status">{launch.status?.name}</p>
                    <p className="launch-card__description">{launch.mission?.description}</p>
                    <p className="launch-card__location">{launch.pad?.location?.name}</p>
                </div>
                <img src={launch.image?.image_url} alt={launch.name} />
        </div>
    )

}

export default LaunchCard

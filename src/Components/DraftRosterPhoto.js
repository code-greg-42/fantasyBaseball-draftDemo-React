export default function RosterPhoto(props) {

    let photoUrl = props.playerName.toLowerCase().replaceAll(" ", "_") + ".png";

    try {
        return <img src={require('../media_files/roster_pics/' + photoUrl)} className="h-16 w-16 relative" />
    } catch(e) {
        console.log(e);
        return <img src={require('../media_files/roster_pics/no_pfp.png')} className="h-16 w-16 relative" />
    }
}
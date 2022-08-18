export default function RosterPhoto(props) {

    let photoUrl = props.playerName.toLowerCase().replaceAll(" ", "_") + ".png";

    try {
        return <img src={require('../media_files/roster_pics/' + photoUrl)} className="relative h-20 w-20 ml-[2vw]" />
    } catch(e) {
        console.log(e);
        return <img src={require('../media_files/roster_pics/no_pfp.png')} className="relative h-20 w-20 ml-[2vw]" />
    }
}
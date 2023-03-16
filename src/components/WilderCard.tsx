import blank_profile from "../assets/blank_profile.png";
import "./WilderCard.css";
import Skill from "./Skill";
// import ISkill from "../interfaces/ISkill";
import IWilder from "../interfaces/IWilder";

// type WilderProps = {
// 	name: string;
// 	city: string;
// 	skills: ISkill[];
// };

// 2 syntaxe possible type OU export interface

// export interface WilderProps {
//     name: string;
// 	city: string;
// 	skills: ISkill[];
// }

// const Wilder = ({ name, city, skills }: WilderProps) => {

type WilderCardProps = IWilder;

const Wilder = ({ name, city, skills }: WilderCardProps) => {
	return (
		<>
			<article className="card">
				<img src={blank_profile} alt={`${name} Profile`} />
				<h3>{name}</h3>
				<p>{city}</p>
				<h4>Wild Skills</h4>
				<ul className="skills">
					{skills.map((skill) => {
						return (
							// <Skill key={index} title={skills.title} votes={skills.votes}/>
							<Skill key={skill.id} name={skill.name} />
						);
					})}
					{/* <Skill title="NODE JS" votes={"5"} /> */}
				</ul>
			</article>
		</>
	);
};
export default Wilder;

import "../components/Skill.css";

type SkillProps = {
	name: string;
};
// const Skill = (props: SkillProps) => {
const Skill = ({ name }: SkillProps) => {
	return (
		<li>
			{name}
			{/* {props.name} */}
			{/* <span className="votes">{votes}</span> */}
		</li>
	);
};
export default Skill;

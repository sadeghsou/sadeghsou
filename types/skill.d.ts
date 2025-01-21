declare global {
  interface Skill {
    name: string;
    image: string;
    colors: string[];
    fields: SkillField[];
    experiences: SkillExperience[];
  }
  interface SkillField {
    name: string;
    image: string;
    level: number;
  }
  interface SkillExperience {
    name: string;
    image: string;
    description: string;
  }
}
export default global;

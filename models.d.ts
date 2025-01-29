declare global {
  interface Experience {
    company: string;
    title: string;
    start: string;
    end: string;
    fields: string[];
  }
  interface KeySkill {
    title: string;
    fields: string[];
  }
  interface SoftSkill {
    title: string;
    description: string;
  }
}
export default global;

import Agent from "./agent/index"

export class EasyPrivacyAgent {
    /**
     * EasyPrivacyAiagent Class
     * Support promote design
     * 
     */
    public agent : Agent;
    constructor(options: {
        OPENAIKEY: string,
        OPENAI_PROVIDER?: string,
        OPENAI_CONTEXT?:string,
        wallet ?:{
            privateKey:string,
            provider?:string
        }
    }) {
        this.agent = new Agent(
            {
                OPENAIKEY: options.OPENAIKEY,
                OPENAI_PROVIDER: options.OPENAIKEY ? options.OPENAIKEY : "https://https://api.openai.com/",
                OPENAI_CONTEXT : options?.OPENAI_CONTEXT 
            }
        )
    }
}
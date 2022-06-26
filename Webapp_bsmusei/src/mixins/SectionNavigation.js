export default {
    data(){ 
        return {
                number_of_sections: 4,
                current_section_id: 0,
                sections: [
                {
                  id: 0,
                  name: "#home"
                },
                {
                  id: 1,
                  name: "#tour"
                },
                {
                  id: 2,
                  name: "#museum"
                },
                {
                  id: 3,
                  name: "#author"
                },
                {
                  id: 4,
                  name: "#contacts"
                }
            ]
        }
    },
    methods: {
        navigate_to_next_section(){
            //maximum 3 sections
            this.current_section_id < this.number_of_sections ? this.current_section_id++ : this.current_section_id = 3
            this.sections.forEach(section => {
              section.id == this.current_section_id ? window.location.href=`#${section.name}` : window.location.href=`${this.sections[this.number_of_sections].name}`
              return
            })
          },
          navigate_to_top_section(){
              //maximum 3 sections
              this.reset_section_count()
              window.scrollTo(0,0)
          },
          reset_section_count(){
            this.current_section_id = 0
          },
          set_next_section(past_section_name) {
            console.log("next section")
            this.sections.forEach(section => {
              if(section.name == past_section_name && section.id < this.number_of_sections)
                this.current_section_id = section.id + 1            
            });
          },
          change_section_by_name(section_name) {
            this.sections.forEach(section => {
                if(section.name == section_name){
                  this.current_section_id = section.id
                  window.location.href=`#${section.name}`
                }           
              });
        }
    }
}
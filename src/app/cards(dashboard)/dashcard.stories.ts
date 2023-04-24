import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatCardModule } from "@angular/material/card";
import { MatNativeDateModule } from "@angular/material/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { boolean } from "@storybook/addon-knobs";
import { Meta, moduleMetadata, Story } from "@storybook/angular";
import { Dashcard } from "./dashcard.component";


export default {
  title: 'Angular Material/Cards/Dashboard card',
  

  argTypes: {

    padding: {

      control: { type: 'select', options: [

        "16px",       
        "24px",
        "32px",
        "40px",
        "60px"

      ] },

      defaultValue: "24px"

    },

  
},
    parameters: {
      a11y: {
        // optional selector which element to inspect
        element: '#root',
        // axe-core configurationOptions (https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#parameters-1)
        config: {},
        // axe-core optionsParameter (https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#options-parameter)
        options: {},
        // optional flag to prevent the automatic check
        manual: true,
      },
    },

  
    

    

  component: Dashcard,
  decorators: [

    moduleMetadata({

      declarations: [Dashcard],

      imports: [
      CommonModule,
      BrowserAnimationsModule,
      BrowserModule,
      FormsModule,
      HttpClientModule,
      MatNativeDateModule,
      MatCardModule,
      ReactiveFormsModule,
      ],
    }),
  ],

} as Meta;

const Template: Story<Dashcard> = (args: Dashcard) => ({
  props: args,
});


export const Carde = Template.bind({});
Carde.storyName = 'Dashboard card';
Carde.args = {


};
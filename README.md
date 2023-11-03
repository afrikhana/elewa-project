# elewa-project

# Base Structure explanation 
#Folders
app/: The root folder of the application. Contains the main application module, components, and other shared resources.
about/: Contains the code for the About component.
client/: Contains the code for the Client component.
invest/: Contains the code for the Invest component.
social-impact/: Contains the code for the Social Impact component.
# Files
app.component.html: The template for the root AppComponent.
app.component.scss: The styles for the root AppComponent.
app.component.spec.ts: The unit tests for the root AppComponent.
app.component.ts: The TypeScript code for the root AppComponent.
app.module.ts: The root module of the application.
Usage

To start developing your application, you can use the following steps:

Navigate to the root folder of your application.
Run the following command to install the necessary dependencies:
npm install
Run the following command to start the development server:
ng serve --open
Open a web browser and navigate to http://localhost:4200 to view your application.
Additional Notes

# ScreeenShots(social link page)
![Screenshot from 2023-11-04 01-13-11](https://github.com/afrikhana/elewa-project/assets/126652969/b16d4d2f-98b7-498b-a382-ddeaf0e5741b)
![Screenshot from 2023-11-04 01-13-34](https://github.com/afrikhana/elewa-project/assets/126652969/bc380281-e08a-442b-9bc0-25672a5110d0)
![Screenshot from 2023-11-04 01-13-49](https://github.com/afrikhana/elewa-project/assets/126652969/f2bc8814-a92b-4433-81d1-e73570fe4462)
![Screenshot from 2023-11-04 01-14-28](https://github.com/afrikhana/elewa-project/assets/126652969/414c6b53-16f5-40bc-b04a-74d150883b57)
![Screenshot from 2023-11-04 01-14-43](https://github.com/afrikhana/elewa-project/assets/126652969/0918b660-8818-4cab-858c-651a97f8ee97)
![Screenshot from 2023-11-04 01-14-56](https://github.com/afrikhana/elewa-project/assets/126652969/6a193056-8b2b-4d86-b96e-36d5b6c7e436)
![Screenshot from 2023-11-04 01-15-17](https://github.com/afrikhana/elewa-project/assets/126652969/783db95d-7c20-46ad-a173-8d33f4cb6276)

# social impact files explaned
-- #The social-impact-features directory contains the following files:
'contains features specified for social-features that are then called '

features.component.scss: This file contains the CSS styles for the social impact features.
features.component.spec.ts: This file contains the unit tests for the social impact features component.
features.component.ts: This file contains the TypeScript code for the social impact features component.
social-impact.component.scss: This file contains the CSS styles for the social impact component.
social-impact.component.spec.ts: This file contains the unit tests for the social impact component.
social-impact.component.ts: This file contains the TypeScript code for the social impact component.
work-content-components
The work-content-components directory contains the following files:
#work-content
This calculates the base hystory of the company and is then shared as a component to the social page
work-content.component.scss: This file contains the CSS styles for the work content component.
work-content.component.spec.ts: This file contains the unit tests for the work content component.
work-content.component.ts: This file contains the TypeScript code for the work content component.
logo
## ui components
This are dumb components that was tend to be reused all round the pages.
The logo directory contains the following files:

logo.component.scss: This file contains the CSS styles for the logo component.
logo.component.spec.ts: This file contains the unit tests for the logo component.
logo.component.ts: This file contains the TypeScript code for the logo component.
social-links
The social-links directory contains the following files:
## social{contains all the links for the specific website of elewa}
social-links.component.scss: This file contains the CSS styles for the social links component.
social-links.component.spec.ts: This file contains the unit tests for the social links component.
social-links.component.ts: This file contains the TypeScript code for the social links component.
ui.component
The ui.component directory contains the following files:

ui.component.scss: This file contains the CSS styles for the UI component.
ui.component.spec.ts: This file contains the unit tests for the UI component.
ui.component.ts: This file contains the TypeScript code for the UI component.
Usage
To use the social impact directory files, you will need to import them into your React project. For example, to import the social-impact component, you would add the following line to your code:

import { SocialImpactComponent } from './social-impact/social-impact.component';
Once you have imported the components, you can use them in your React code like any other component. For example, to render the social-impact component, you would add the following code to your template:

<SocialImpactComponent />
Conclusion
The social impact directory files provide a set of React components that can be used to create a social impact website. The components are well-written and easy to use, and they are unit tested to ensure quality.

It holds most of the specified components that are used in the application for the animations to functionality.

## Client / shared components
The client are all the base routes that are used in the amplication. It recieves the routes components from the global app.routes  module then assigns the specific paths there for the component maybe reused
client.component.scss: This file contains the CSS styles for the client component.
client.component.ts: This file contains the TypeScript code for the client component.
client.component.spec.ts: This file contains the unit tests for the client component.
shared: This directory contains the files for the shared components and features.
The client.component is the main component for the Angular application. It is responsible for rendering the layout of the application and loading the other components.


The shared directory contains the files for the shared components and features. These components and features are used across the application. For example, the shared-feature component is a shared component that is used in both the client and invest features.


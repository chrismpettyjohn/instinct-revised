## Setup
Instinct's frontend libraries follow [Atomic Design](https://codeburst.io/atomic-design-with-react-e7aea8152957) principles.

## Introduction

### Context
Instinct makes heavy usage of [React Context](https://reactjs.org/docs/context.html).  For those of you unfamiliar to React, context
is a way of sharing objects across different components at different levels easier.  

Instinct utilizes Context as a means of making state globally accessible such as user sessions, theme settings and more.

### Components
Another principle of React is  [Component Based Architecture](https://reactjs.org/docs/components-and-props.html).  By utilizing components,
we can reuse bits of logic and design instead of needing to reinvent the wheel.  Furthermore, it makes fixing bugs and adding features
a breeze in the long run.

### Services
[Services](https://medium.com/@SoftwareDevelopmentCommunity/what-is-service-oriented-architecture-fa894d11a7ec) are utilized heavily in Instinct to ensure chunks of logic are reusable and easy to identify.  The main problem services
solve on the frontend is providing a place for API logic to be encapsulated and shared.

### Hooks
Similar to Services, [React Hooks](https://reactjs.org/docs/hooks-intro.html) allow us to share chunks of logic that may tie into state, effects or other more complex logic.
By using a hook, we can detach the logic away from the component and view state which allows for greater flexibility in the long run.

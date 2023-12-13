# SimpleReactModal

A simple and customizable React modal component.

## Installation

Install the package using npm:

```
npm i react-modal-package-openclassrooms-p14
```

Install also react icons

```
npm install react-icons --save
```

## Initialization
Import the SimpleReactModal component and the useModalShow hook into your React component:

```
import { SimpleReactModal, useModalShow } from "react-modal-package-openclassrooms-p14";
```

In case something is missing, add the following import :
```
import React, { useState, useEffect, useRef } from "react";
```


## Usage
useModalShow Hook
The useModalShow hook provides a simple way to manage the modal state. It returns an array with the modal state, open and close functions:
```
	const timeOut = 2500;
	const [isOpen, setIsOpen, openModal, closeModal] = useModalShow(timeOut);
	const content = 'Employee Created!';
```

- timeOut: set the auto close timer (in ms) for the modal, if set to 0, the modal will not close automatically
- content: set the modal content

- isOpen: A boolean indicating whether the modal is open or closed.
- setIsOpen: Function to set the modal state.
- openModal: Function to open the modal.
- closeModal: Function to close the modal.

optional :
- title: set the modal title


## SimpleReactModal Component
Use the SimpleReactModal component to display a modal.

Include it in your component and pass the necessary props, example :

```
<SimpleReactModal
  title="Modal Title"
  content="Modal Content"
  type="success"
  timeOut={5000}
  debugMode={false}
  isOpen={isOpen}
/>
```

- title (optional): The title of the modal.
- content: The content of the modal.
- type: A string specifying the type of the modal (e.g., "default", "success", "error"), 'success' = green styling - 'error' = red styling.
- timeOut (optional): Auto-close the modal after a specified time (in milliseconds). If not specified will disapear only if user click on close symbol or click away from modal
- debugMode (optional): Show a 'Show' button in debug mode to test the modal.
- isOpen: The modal state is mandatory to allow the isOpen state conservation


Optional :
- style: you can add styling options props directly

You can also style the modal using the already defined className :


- :root: Modal Effect: Defines color variables used in other styles.
:root {
	--white: #ffffff;
	--black: #000000;
	--lowBlack: rgba(0, 0, 0, 0.678);
	--success: #51be56;
	--warning: #ffc107;
	--error: #ff3122;
	--primary: #29b6f6;
}

- .modalContainer: Modal Effect: Positions the modal in the center of the window.

- .modalDialogWrapper: Modal Effect: Sets the background color of the modal.

- .modalDialog Modal Effect: Main style of the modal, centers it in the window, defines text color, shadow, border, etc. Adds a fade-in animation.

- .modalDialog.success: Modal Effect: Adds a specific style in case of success.

- .modalDialog.error: Modal Effect: Adds a specific style in case of an error.

- .modalDialog.warning: Modal Effect: Adds a specific style in case of a warning.

- .modalDialog--Title: Modal Effect: Style for the modal title.

- .modalDialog--Content: Modal Effect: Style for the modal content.

- .modalDialog--CloseBtnContainer: Modal Effect: Container for the close button.

- .modalDialog--CloseBtn: Modal Effect: Style for the close button.

- .modalDialog--CloseBtn:hover: Modal Effect: Style for the close button on hover.

# That's it! You're now ready to use the SimpleReactModal component in your React application.
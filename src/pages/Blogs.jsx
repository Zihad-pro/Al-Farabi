import React from "react";

const Blogs = () => {
  return (
    <div class="container mx-auto py-10 rounded-lg">
      <div class="rounded-lg bg-white mb-10">
        <div class="border-b-1 border-dashed py-5 px-4">
          <p class="font-bold">
            Question-1: What is useState and how does it work in React?
          </p>
        </div>
        <div class="py-5 px-4">
          UseState is a React Hook that allows functional components to manage
          state. It provides a way to declare state variables and update them,
          triggering re-renders of the component when the state changes.
        </div>
      </div>
      <div class="rounded-lg bg-white mb-10">
        <div class="border-b-1 border-dashed py-5 px-4">
          <p class="font-bold">
            Question-2: What is the purpose of useEffect in React?
          </p>
        </div>
        <div class="py-5 px-4">
          The useEffect hook in React is purposed to manage side effects in
          functional components. Side effects are operations that interact with
          the outside world, such as fetching data, manipulating the DOM
          directly, setting up timers, or subscribing to events.
        </div>
      </div>
      <div class="rounded-lg bg-white mb-10">
        <div class="border-b-1 border-dashed py-5 px-4">
          <p class="font-bold">
            Question-3: What is a custom hook in React and when should you use
            one?
          </p>
        </div>
        <div class="py-5 px-4">
          <p>
            Custom hook in React is a JavaScript function, named starting with
            "use," that encapsulates stateful logic or side effects that can be
            reused across multiple components. It allows developers to extract
            and share logic that would otherwise be duplicated or make
            components more complex.
          </p>
        </div>
      </div>
      <div class="rounded-lg bg-white mb-10">
        <div class="border-b-1 border-dashed py-5 px-4">
          <p class="font-bold">
            Question-4:Difference between controlled and uncontrolled
            components? Which one is better?
          </p>
        </div>
        <div class="py-5 px-4">
          <p>
            In React, controlled components manage their own state, while
            uncontrolled components rely on the DOM for state
            management.Controlled componentes is best because controlled
            components offer more flexibility and control, making them a good
            choice for complex forms.
          </p>
        </div>
      </div>
      <div class="rounded-lg bg-white mb-10">
        <div class="border-b-1 border-dashed py-5 px-4">
          <p class="font-bold">
            Question-5: Tell us something about useFormStatus() (explore and
            explain) ?
          </p>
        </div>
        <div class="py-5 px-4">
          <p>
            UseFormStatus () is a React hook that gives you access to the status
            of a form submission, such as whether the form is currently
            submitting. This is useful when you want to: Show a loading spinner
            on a submit button Disable the submit button while the form is
            submitting Give visual feedback to the user
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;

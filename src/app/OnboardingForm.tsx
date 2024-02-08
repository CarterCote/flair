// import React from 'react';
// import { useForm, Controller } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod';
// import { Input, Button } from 'shadcn'; // Assuming Shadcn exports these
// import { formSchema } from './yourFormSchema'; // Import your schema

// export function OnboardingForm() {
//   const { register, handleSubmit, control, formState: { errors } } = useForm({
//     resolver: zodResolver(formSchema),
//   });

//   const onSubmit = data => {
//     console.log(data);
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <Input {...register("name")} placeholder= "Name" />
//       {errors.name && <p>{errors.name.message}</p>}
      
//       <Input {...register("email")} placeholder="Email" />
//       {errors.email && <p>{errors.email.message}</p>}

//       {/* Add more fields as needed */}

//       <Button type="submit">Submit</Button>
//     </form>
//   );
// }

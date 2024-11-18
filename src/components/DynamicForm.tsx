import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { FormSchema } from '../types';
import FormField from './FormField';

interface DynamicFormProps {
  schema: FormSchema;
}

const DynamicForm: React.FC<DynamicFormProps> = ({ schema }) => {
  const methods = useForm();
  
  const onSubmit = (data: any) => {
    console.log("Form Submitted:", data);
    alert("Form submitted successfully!");
  };

  return (
    <div className="flex">
      <div className="w-1/2 p-4">
        <h1 className="text-xl font-bold">{schema.formTitle}</h1>
        <p className="text-sm text-gray-600">{schema.formDescription}</p>
      </div>
      
      <div className="w-1/2 p-4">
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-4">
            {schema.fields.map((field) => (
              <FormField key={field.id} field={field} />
            ))}
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">
              Submit
            </button>
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default DynamicForm;

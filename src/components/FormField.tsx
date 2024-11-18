import React from 'react';
import { useFormContext } from 'react-hook-form';
import { Field } from '../types';

interface FormFieldProps {
  field: Field;
}

const FormField: React.FC<FormFieldProps> = ({ field }) => {
    const { register, formState: { errors } } = useFormContext();
  
    let pattern: RegExp | undefined;
  
    // If validation pattern exists and is a valid string, create a RegExp.
    if (field.validation?.pattern) {
      pattern = new RegExp(field.validation.pattern);
    }
  
    switch (field.type) {
      case 'text':
      case 'email':
      case 'textarea':
        return (
          <div className="mb-4">
            <label htmlFor={field.id} className="block text-sm font-semibold">
              {field.label}
            </label>
            <input
              {...register(field.id, {
                required: field.required,
                pattern: pattern,
              })}
              type={field.type}
              id={field.id}
              placeholder={field.placeholder}
              className="w-full p-2 border rounded-md mt-2"
            />
            {errors[field.id] && (
              <p className="text-red-500 text-sm">{field.validation?.message}</p>
            )}
          </div>
        );
        
      case 'select':
        return (
          <div className="mb-4">
            <label htmlFor={field.id} className="block text-sm font-semibold">
              {field.label}
            </label>
            <select
              {...register(field.id, { required: field.required })}
              id={field.id}
              className="w-full p-2 border rounded-md mt-2"
            >
              {field.options?.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            {errors[field.id] && <p className="text-red-500 text-sm">This field is required</p>}
          </div>
        );
  
      case 'radio':
        return (
          <div className="mb-4">
            <span className="block text-sm font-semibold">{field.label}</span>
            {field.options?.map((option) => (
              <label key={option.value} className="inline-flex items-center mt-2">
                <input
                  {...register(field.id, { required: field.required })}
                  type="radio"
                  value={option.value}
                  className="mr-2"
                />
                {option.label}
              </label>
            ))}
            {errors[field.id] && <p className="text-red-500 text-sm">This field is required</p>}
          </div>
        );
  
      default:
        return null;
    }
  };

export default FormField;

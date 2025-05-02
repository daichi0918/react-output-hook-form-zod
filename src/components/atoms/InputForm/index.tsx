/**
 * InputForm
 *
 * @package atoms
 */

import { JSX } from 'react';
import './index.css';

type InputFormType = JSX.IntrinsicElements['input'];

/**
 *
 * @param {InputFormType} props
 * @returns {JSX.Element}
 */
export const InputForm = (props: InputFormType) => {
  const { className, placeholder, value, onChange, readOnly = false } = props;
  return (
    <>
      <input
        type="text"
        className={className}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        readOnly={readOnly}
      />
    </>
  );
};

import React from 'react';
import './index.scss';
import {classNames} from "@/helpers";

type FontFamily = 'pt' | 'open';
type FontWeight = 'light' | 'regular' | 'bold';

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  family?: FontFamily;
  weight?: FontWeight;
  italic?: boolean;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
  // className уже включен в React.HTMLAttributes
}
export const Typography: React.FC<TypographyProps> = ({
                                                        children,
                                                        family = 'pt',
                                                        weight = 'regular',
                                                        italic = false,
                                                        className = '',
                                                        tag: Tag = 'p',
                                                        ...props
                                                      }) => {
  const getFontClass = () => {
    const fontClass = `${family}-${weight}`;
    const italicClass = italic ? '-italic' : '';
    return `${fontClass}${italicClass}`;
  };

  const cls = classNames('typography', {}, [getFontClass(), className]);

  return (
    // Используем Tag напрямую
    <Tag className={cls} {...props}>
      {children}
    </Tag>
  );
};

// Альтернативный вариант
interface TextProps {
  variant?: 'pt-light' | 'pt-regular' | 'pt-bold' | 'pt-light-italic' | 'pt-italic' | 'pt-bold-italic' | 'open-light' | 'open-regular' | 'open-bold' | 'open-light-italic' | 'open-italic' | 'open-bold-italic';
  children: React.ReactNode;
}

export const Text: React.FC<TextProps> = ({
                                            variant = 'pt-regular',
                                            children
                                          }) => {
  return <span className={variant}>{children}</span>;
};
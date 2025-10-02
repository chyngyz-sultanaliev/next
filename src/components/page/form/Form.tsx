"use client";
import React, { useState, ReactNode } from "react";
import sass from "./Form.module.scss";
import Button from "@/components/ui/button/Button";

interface FormProps {
  title: string;
  subtitle: string;
  trigger?: ReactNode; // любой элемент, который открывает форму
  fileUrl?: string; // для скачивания
  onSubmitAction?: (name: string, phone: string) => void;
}

const Form: React.FC<FormProps> = ({
  title,
  subtitle,
  trigger,
  fileUrl,
  onSubmitAction,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [agree, setAgree] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agree) {
      alert("Пожалуйста, дайте согласие на обработку персональных данных.");
      return;
    }
    if (!name || !phone) {
      alert("Пожалуйста, заполните все поля.");
      return;
    }

    if (onSubmitAction) onSubmitAction(name, phone);

    if (fileUrl) {
      const link = document.createElement("a");
      link.href = fileUrl;
      link.download = fileUrl.split("/").pop() || "file";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      alert("Данные отправлены!");
      console.log({ name, phone, agree });
    }

    setName("");
    setPhone("");
    setAgree(false);
    setIsOpen(false);
  };

  return (
    <>
      {/* Триггер */}
      {trigger ? (
        <div onClick={() => setIsOpen(true)}>{trigger}</div>
      ) : (
        <Button onClick={() => setIsOpen(true)}>Открыть форму</Button>
      )}

      {/* Модал */}
      {isOpen && (
        <div className={sass.formWrapper} onClick={() => setIsOpen(false)}>
          <div className={sass.form} onClick={(e) => e.stopPropagation()}>
            <h2 className={sass.title}>{title}</h2>
            <p className={sass.subtitle}>{subtitle}</p>

            <form onSubmit={handleSubmit} className={sass.formContent}>
              <input
                type="text"
                placeholder="Ваше имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={sass.input}
              />
              <input
                type="tel"
                placeholder="+7 (999) 999-99-99"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className={sass.input}
              />
              <button type="submit" className={sass.button}>
                Отправить
              </button>

              <label className={sass.checkbox}>
                <input
                  type="checkbox"
                  checked={agree}
                  onChange={(e) => setAgree(e.target.checked)}
                />
                <span >
                  Нажимая на кнопку, я даю согласие на обработку моих
                  персональных данных.
                </span>
              </label>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Form;

"use client";
import React, { useState } from "react";
import sass from "./Quiz.module.scss";
import { Step } from "./steps";
import { steps } from "./steps";
import Button from "@/components/ui/button/Button";
import { FaRegCircleCheck } from "react-icons/fa6";
import Image from "next/image";
import img from "./../../../assets/image/image1.png";
import Icon from "@/components/ui/icon/Icon";
import { TiLockClosed } from "react-icons/ti";

const Quiz = () => {
  const [stepIndex, setStepIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [selectedArea, setSelectedArea] = useState<number>(136);
  const [areaType, setAreaType] = useState<"roof" | "house">("roof");

  const step: Step = steps[stepIndex];
  const totalSteps = steps.length;

  const handleOption = (label: string) => {
    setAnswers({ ...answers, [step.question]: label });
  };

  const handleInput = (name: string, value: string) => {
    setAnswers({ ...answers, [name]: value });
  };

  const handleNext = () => {
    if (stepIndex < totalSteps - 1) {
      setStepIndex(stepIndex + 1);
    } else {
      console.log("Результаты:", answers, { areaType, selectedArea });
      alert("Спасибо! Ваши данные отправлены.");
    }
  };

  const handlePrev = () => {
    if (stepIndex > 0) {
      setStepIndex(stepIndex - 1);
    }
  };

  const canProceed =
    (step.type === "options" && !!answers[step.question]) ||
    (step.type === "radio" && selectedArea > 0) ||
    (step.type === "input" && selectedArea > 0);

  return (
    <div className={sass.quiz}>
      <div className="container">
        <h1>
          <span>Пройдите тест и рассчитайте </span> <br />
          стоимость кровли под ваш объект <br /> с точностью 97%
        </h1>
        <div className={sass.quiz_cards}>
          <div className={sass.quiz_card}>
            <div className={sass.progress}>
              <div
                className={sass.progressBar}
                style={{ width: `${((stepIndex + 1) / totalSteps) * 100}%` }}
              />
            </div>

            <div className={sass.title}>
              <h3>
                <span>{step.title} </span> {step.question}
              </h3>
              <p>{step.help}</p>
            </div>
            {step.type === "options" && (
              <div className={sass.options}>
                {step.options?.map((opt) => (
                  <div
                    key={opt.label}
                    className={`${sass.option}`}
                    onClick={() => handleOption(opt.label)}
                  >
                    <div
                      className={` ${
                        answers[step.question] === opt.label ? sass.active : ""
                      }`}
                    >
                      {opt.img && <img src={opt.img} alt={opt.label} />}
                      {answers[step.question] === opt.label ? (
                        <span className={sass.checkbox}>
                          <FaRegCircleCheck />
                        </span>
                      ) : (
                        ""
                      )}
                    </div>
                    <p>{opt.label}</p>
                  </div>
                ))}
              </div>
            )}

            {step.type === "radio" && (
              <>
                <div className={sass.radioGroup}>
                  <label className={sass.radioLabel}>
                    <div className={sass.radioContainer}>
                      <input
                        type="radio"
                        name="areaType"
                        value="roof"
                        checked={areaType === "roof"}
                        onChange={() => setAreaType("roof")}
                        className={sass.radioInput}
                      />
                      <div
                        className={`${sass.radioButton} ${
                          areaType === "roof" ? sass.radioButtonActive : ""
                        }`}
                      >
                        {areaType === "roof" && (
                          <div className={sass.radioInner}></div>
                        )}
                      </div>
                    </div>
                    <span className={sass.radioText}>Площадь кровли</span>
                  </label>

                  <label className={sass.radioLabel}>
                    <div className={sass.radioContainer}>
                      <input
                        type="radio"
                        name="areaType"
                        value="house"
                        checked={areaType === "house"}
                        onChange={() => setAreaType("house")}
                        className={sass.radioInput}
                      />
                      <div
                        className={`${sass.radioButton} ${
                          areaType === "house" ? sass.radioButtonActive : ""
                        }`}
                      >
                        {areaType === "house" && (
                          <div className={sass.radioInner}></div>
                        )}
                      </div>
                    </div>
                    <span className={sass.radioText}>Площадь дома</span>
                  </label>
                </div>

                <div className={sass.areaInput}>
                  <div className={sass.inputGroup}>
                    <input
                      type="number"
                      value={selectedArea}
                      onChange={(e) =>
                        setSelectedArea(parseInt(e.target.value) || 0)
                      }
                      className={sass.areaNumberInput}
                    />
                    <span className={sass.unitLabel}>м2</span>
                  </div>

                  <div className={sass.sliderContainer}>
                    <input
                      type="range"
                      min="10"
                      max="1000"
                      value={selectedArea}
                      onChange={(e) =>
                        setSelectedArea(parseInt(e.target.value))
                      }
                      className={sass.slider}
                      style={{
                        background: `linear-gradient(to right, #fb923c 0%, #fb923c ${
                          ((selectedArea - 10) / 990) * 100
                        }%, #e5e7eb ${
                          ((selectedArea - 10) / 990) * 100
                        }%, #e5e7eb 100%)`,
                      }}
                    />
                    <div className={sass.sliderLabels}>
                      <span>10 м2</span>
                      <span>1000 м2</span>
                    </div>
                  </div>
                </div>
              </>
            )}

            {step.type === "input" && step.inputs && (
              <div className={sass.inputs}>
                {step.inputs.map((input) => (
                  <div key={input.name} className={sass.inputGroup}>
                    <input
                      type="text"
                      placeholder={input.placeholder}
                      value={answers[input.name] || ""}
                      onChange={(e) => handleInput(input.name, e.target.value)}
                    />
                  </div>
                ))}
                <Button>Рассчитать стоимость</Button>
              </div>
            )}
            <div className={sass.btns}>
              {stepIndex > 0 && <Button  onClick={handlePrev}>Назад</Button>}
              <Button onClick={handleNext} disabled={!canProceed}>
                {stepIndex === totalSteps - 1 ? "Завершить" : "Далее"}
              </Button>
            </div>
          </div>
          <div className={sass.item}>
            <Image src={img} width={300} height={350} alt="png" />
            <div className={sass.item_text}>
              <h1>Ответьте на 5 вопросов и получите в конце:</h1>
              <div className={sass.icon}>
                <Icon bgType="radial" icon={<TiLockClosed />} />
                <p>
                  Бесплатный расчет стоимости кровли под ваш объект в 3-х
                  вариантах
                </p>
              </div>
              <div className={sass.icon}>
                <Icon bgType="radial" icon={<TiLockClosed />} />
                <p>
                  Бесплатный расчет стоимости кровли под ваш объект в 3-х
                  вариантах
                </p>
              </div>
              <div className={sass.icon}>
                <Icon bgType="radial" icon={<TiLockClosed />} />
                <p>
                  Бесплатный расчет стоимости кровли под ваш объект в 3-х
                  вариантах
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;

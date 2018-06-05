/* eslint no-console: "off" */
import CONSTANTS from './constants'
import { setInputEvents, selectInputClickEvent } from './helpers'
import changeEvents from './changeEvents'

const { INITIAL_PAGE, CAREER_PLANS_PAGE, LIFESTYLE_PLANS_PAGE } = CONSTANTS.IDs.PAGE_IDS
const { QUESTION_IDS } = CONSTANTS.IDs
const { OCCUPATIONAL_DATA, EDU_PUBLIC_PRIVATE_DATA, HOUSING_OPTIONS_DATA } = CONSTANTS

const initialInfoPage = {

	id: INITIAL_PAGE,
	title: "Let's start with where you are at...",
	show: true,

	questions: [
		{
			id: QUESTION_IDS[INITIAL_PAGE].AGE_TEXT,
			placeholder: 'Age',
			type: 'text',
			changeEvent: changeEvents[QUESTION_IDS[INITIAL_PAGE].AGE_TEXT]

		},
		{
			id: 'networkInput',
			placeholder: 'Networth',
			type: 'text',
			changeEvent: changeEvents[QUESTION_IDS[INITIAL_PAGE].NETWORTH_TEXT]
		}
	]
}

const careerPlansPage = {
	id: 'careerPlansPage',
	title: 'What are your aspirations...',
	show: false,
	questions: [
		{
			id: QUESTION_IDS[CAREER_PLANS_PAGE].CAREER_DROPDOWN,
			label: 'Career',
			show: true,
			placeholder: 'Choose a Career...',
			type: 'select-dropdown',
			changeEvent: changeEvents[QUESTION_IDS[CAREER_PLANS_PAGE].CAREER_DROPDOWN],
			values: OCCUPATIONAL_DATA
		},
		{
			id: QUESTION_IDS[CAREER_PLANS_PAGE].EDUCATION_PUBLIC_PRIVATE_RADIO,
			label: 'Education',
			show: false,
			placeholder: 'Choose a type of school...',
			type: 'radio',
			changeEvent: changeEvents[QUESTION_IDS[CAREER_PLANS_PAGE].EDUCATION_PUBLIC_PRIVATE_RADIO],
			values: EDU_PUBLIC_PRIVATE_DATA
		}
	]
}

const lifestylePage = {
	id: 'lifestylePage',
	title: 'How do you want to live...',
	show: false,
	questions: [
		{
			id: QUESTION_IDS[LIFESTYLE_PLANS_PAGE].MORTGAGE_RENT_RADIO,
			label: 'Mortgage / Rent',
			show: true,
			placeholder: 'Choose a type housing...',
			type: 'radio',
			changeEvent: changeEvents[QUESTION_IDS[LIFESTYLE_PLANS_PAGE].MORTGAGE_RENT_RADIO],
			values: HOUSING_OPTIONS_DATA
		}
	]
}

const retirementPlansPage = {
	id: 'retirementPlansPage',
	title: 'What are your retirement plans...',
	show: false,
	questions: [
		{
			id: '401KInput',
			placeholder: '401K / Month',
			type: 'text'
		}
	]
}

const pages = [
	initialInfoPage,
	careerPlansPage,
	lifestylePage,
	retirementPlansPage
]

export { setInputEvents, selectInputClickEvent }

export default pages

interface CreditData {
    id: string;
    amount: number;
    status: string;
    time: string;
}

function createCreditData(id: string, amount: number, status: string, time: string): CreditData {
    return { id, amount, status, time };
}

export const creditData = [
    createCreditData('1', 100, "Purchased", "2021-08-10 13:22:30"),
    createCreditData('2', 30, "Purchased", "2021-08-10 13:22:30"),
    createCreditData('3', 40, "Processing", "2021-08-10 13:22:30"),
    createCreditData('4', 30, "Purchased", "2021-08-10 13:22:43"),
    createCreditData('5', 66, "Purchased", "2021-08-10 13:22:43"),
    createCreditData('6', 90, "Purchased", "2021-08-10 13:15:43"),
    createCreditData('7', 100, "Purchased", "2021-08-11 13:22:30"),
    createCreditData('8', 80, "Processing", "2021-08-11 13:15:30"),
    createCreditData('9', 70, "Purchased", "2021-08-11 13:22:43"),
    createCreditData('10', 90, "Purchased", "2021-08-11 13:15:30"),
    createCreditData('11', 200, "Purchased", "2021-08-13 19:15:43"),
    createCreditData('12', 200, "Purchased", "2021-08-13 19:15:30"),
    createCreditData('13', 300, "Processing", "2021-08-13 19:22:30"),
    createCreditData('14', 15, "Processing", "2021-08-13 19:22:30"),
    createCreditData('15', 45, "Purchased", "2021-08-13 19:22:30"),
    createCreditData('16', 70, "Purchased", "2021-08-13 13:22:30"),
    createCreditData('17', 80, "Processing", "2021-08-14 13:22:30"),
    createCreditData('18', 90, "Processing", "2021-08-14 13:22:30"),
    createCreditData('18', 44, "Purchased", "2021-08-14 13:19:30"),
    createCreditData('19', 12, "Processing", "2021-08-14 13:20:30"),
    createCreditData('20', 100, "Purchased", "2021-08-14 13:21:30"),
    createCreditData('21', 300, "Purchased", "2021-08-14 13:22:30"),
    createCreditData('22', 300, "Purchased", "2021-08-14 13:23:30"),
];

interface HistoryData {
    id: string;
    content: string;
    status: string;
    time: string;
}

function createHistoryData(id: string, content: string, status: string, time: string): HistoryData {
    return { id, content, status, time };
}

export const messageHistory = [
    createHistoryData('1', "Icon buttons are commonly found in app bars and toolbars.", "Sent", "2021-08-10 13:22:30"),
    createHistoryData('2', "Icons are also appropriate for toggle buttons that allow a single choice to be selected or deselected, such as adding or removing a star to an item.", "Sent", "2021-08-10 13:22:30"),
    createHistoryData('3', "The Text Buttons, Contained Buttons,", "Can't send", "2021-08-10 13:22:30"),
    createHistoryData('4', "Floating Action Buttons and Icon Buttons are built on top of the same component", "Sent", "2021-08-10 13:22:43"),
    createHistoryData('5', "You can take advantage of this lower level component to build custom interactions.", "Sent", "2021-08-10 13:22:43"),
    createHistoryData('6', "Third-party routing library\n", "Sent", "2021-08-10 13:15:43"),
    createHistoryData('7', "One common use case is to use the button to trigger navigation to a new page. ", "Sent", "2021-08-11 13:22:30"),
    createHistoryData('8', "The ButtonBase component provides a property to handle this use case: component.", "Can't send", "2021-08-11 13:15:30"),
    createHistoryData('9', "However for certain focus polyfills ButtonBase requires the DOM node of the provided component", "Sent", "2021-08-11 13:22:43"),
    createHistoryData('10', "This is achieved by attaching a ref to the component and expecting that the component forwards this ref to the underlying DOM node.", "Sent", "2021-08-11 13:15:30"),
    createHistoryData('11', "Given that many of the interactive components rely on ButtonBase, you should be able to take advantage of it everywhere.", "Sent", "2021-08-13 19:15:43"),
    createHistoryData('12', "Here is an integration example with react-router.", "Sent", "2021-08-13 19:15:30"),
    createHistoryData('13', "The ButtonBase component sets", "Can't send", "2021-08-13 19:22:30"),
    createHistoryData('14', "on disabled buttons, which prevents the appearance of a disabled cursor.", "Can't send", "2021-08-13 19:22:30"),
    createHistoryData('15', "If you wish to use not-allowed, you have two options:", "Sent", "2021-08-13 19:22:30"),
    createHistoryData('16', "You can remove the pointer events style on the disabled state", "Sent", "2021-08-13 13:22:30"),
    createHistoryData('17', "You should add pointer-events: none; back when you need to display tooltips on disabled elements.", "Can't send", "2021-08-14 13:22:30"),
    createHistoryData('18', "The cursor won't change if you render something other than a button element, for instance, a link element.", "Can't send", "2021-08-14 13:22:30"),
    createHistoryData('18', "This has the advantage of supporting any element, for instance", "Sent", "2021-08-14 13:19:30"),
    createHistoryData('19', "Fancy larger or smaller buttons?", "Can't send", "2021-08-14 13:20:30"),
    createHistoryData('20', "Note that the documentation avoids mentioning native props (there are a lot) in the API section of the components.", "Sent", "2021-08-14 13:21:30"),
    createHistoryData('21', "All components accept an onClick handler that is applied to the root DOM element.", "Sent", "2021-08-14 13:22:30"),
    createHistoryData('22', "Outlined buttons are also a lower emphasis alternative to contained buttons, or a higher emphasis alternative to text buttons.", "Sent", "2021-08-14 13:23:30"),
];

interface UserData {
    id: string;
    name: string;
    credit: number;
    detail: string;
    topUp: string;
}

function createUserData(id: string, name: string, credit: number, detail: string, topUp: string): UserData {
    return {id, name, credit, detail, topUp};
}

export const userData = [
    createUserData('1', "Kim", 100, "detail", "topUp"),
    createUserData('2', "John", 100, "detail", "topUp"),
    createUserData('3', "Ken", 100, "detail", "topUp"),
    createUserData('4', "Mai", 100, "detail", "topUp"),
    createUserData('5', "Mei", 100, "detail", "topUp"),
    createUserData('6', "Kiana", 100, "detail", "topUp"),
    createUserData('7', "Himeko", 100, "detail", "topUp"),
    createUserData('8', "Ann", 100, "detail", "topUp"),
    createUserData('9', "Duranda", 100, "detail", "topUp"),
    createUserData('10', "Rita", 100, "detail", "topUp"),
    createUserData('11', "Kenvin", 100, "detail", "topUp"),
];
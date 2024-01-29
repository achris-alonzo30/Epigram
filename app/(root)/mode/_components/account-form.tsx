import { FormWrapper } from "./form-wrapper"

type AccountData = {
    accountName: string;
}

type AccountFormProps = AccountData & {
    updateFields: (fields: Partial<AccountData>) => void;
}

export const AccountForm = ({ accountName, updateFields }: AccountFormProps) => {

    return (
        <FormWrapper title="Account">
            <label htmlFor="account-name">Name</label>
            <input autoFocus required type="text" id="account-name" name="account-name" value={accountName} onChange={(e) => updateFields({ accountName: e.target.value })} />
        </FormWrapper>
    )
}
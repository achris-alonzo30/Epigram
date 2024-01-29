import { FormWrapper } from "./form-wrapper"


type UserData = {
    name: string;
}

type UserFormProps = UserData & {
    updateFields: (fields: Partial<UserData>) => void;
}


export const UserForm = ({ name, updateFields }: UserFormProps) => {
    return (
        <FormWrapper title="User">
            <label htmlFor="user-name">Name</label>
            <input autoFocus required type="text" id="user-name" name="user-name" value={name} onChange={(e) => updateFields({ name: e.target.value })} />
        </FormWrapper>
    )

}
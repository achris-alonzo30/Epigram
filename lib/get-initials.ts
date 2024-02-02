
type getInitialsProps = {
    firstName: string ;
    lastName: string;
}

function getInitials({firstName, lastName}: getInitialsProps) {
    const firstInitial = firstName.charAt(0).toUpperCase();
    const lastInitial = lastName.charAt(0).toUpperCase();
    return `${firstInitial}${lastInitial}`;
  }
  
export default getInitials
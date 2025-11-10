const UserDetails = async ({params}: {params : Promise<{id : string}>}) => {
    const {id} = await params;

    // Note: Pageview tracking is handled automatically by PostHogPageView component
    // The user profile view event will be captured by the pageview with the correct URL

  return (
    <div> Showing details for user # {id}</div>
  )
}

export default UserDetails
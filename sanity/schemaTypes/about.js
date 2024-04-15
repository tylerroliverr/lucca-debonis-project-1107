export const about = {
    name: "about",
    title: "About",
    type: "document",
    fields: [
      {
        title: "About Blurb",
        name: "aboutBlurb",
        type: "text"
      },
      {
        title: "Awards",
        name: "awards",
        type: "array",
        of: [
          {
            title: "Award Name",
            name: "awardName",
            type: "string"
          }
        ]
      },
      {
        title: "Capabilities",
        name: "capabilities",
        type: "array",
        of: [
          {
            title: "Capability Name",
            name: "capabilityName",
            type: "string"
          }
        ]
      }
    ]
  }
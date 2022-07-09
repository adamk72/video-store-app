# Components

## Folder List

- `elements` stores the building blocks of the UI. These should remain as generic as possible. If creating something specific for the app, use the components here to create the more specific item in the `specs` folder.
  - `cards` for storing card like elements. Card should be individual items that contain a mixture of text and images in a rectangular format.
  - `panels` are for elements that contain other elements; these are purely organizational in nature, and should not be used to display pure content.
  - `widgets` are auxillary and decorator type elements.
- `layouts` store high level organizing components. These are primarily used to arrange pages, but may be used for specific tasks if appropriate.
- `specs` contains the specific elements for the application; this may variations of elements built from the components stored in `elements`.

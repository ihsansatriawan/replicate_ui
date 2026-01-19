#!/bin/bash

# Script to create GitHub issues for Tokopedia UI Replication project
# Prerequisites: gh CLI installed and authenticated

REPO="ihsansatriawan/replicate_ui"

echo "Creating labels..."

# Create labels (will skip if already exists)
gh label create "group-a" --description "No dependencies - Start immediately" --color "0E8A16" --repo $REPO 2>/dev/null || echo "Label group-a exists"
gh label create "group-b" --description "Depends on Group A" --color "1D76DB" --repo $REPO 2>/dev/null || echo "Label group-b exists"
gh label create "group-c" --description "Depends on Group B" --color "FBCA04" --repo $REPO 2>/dev/null || echo "Label group-c exists"
gh label create "group-d" --description "Final - Depends on all groups" --color "D93F0B" --repo $REPO 2>/dev/null || echo "Label group-d exists"
gh label create "react-component" --description "React component task" --color "7057FF" --repo $REPO 2>/dev/null || echo "Label react-component exists"

echo ""
echo "Creating issues..."

# Task 1: Data Layer (Group A)
gh issue create --repo $REPO \
  --title "Task 1: Setup & Data Layer" \
  --label "group-a,react-component" \
  --body-file "$(dirname "$0")/task-01-data-layer.md"

# Task 2: Common Icons (Group A)
gh issue create --repo $REPO \
  --title "Task 2: Common Icon Components" \
  --label "group-a,react-component" \
  --body-file "$(dirname "$0")/task-02-common-icons.md"

# Task 4: IconCard (Group A)
gh issue create --repo $REPO \
  --title "Task 4: IconCard Component" \
  --label "group-a,react-component" \
  --body-file "$(dirname "$0")/task-04-icon-card.md"

# Task 8: Icon Assets (Group A)
gh issue create --repo $REPO \
  --title "Task 8: Featured Icons Assets" \
  --label "group-a" \
  --body-file "$(dirname "$0")/task-08-icon-assets.md"

# Task 10: Tailwind Config (Group A)
gh issue create --repo $REPO \
  --title "Task 10: Global Styles & Tailwind Config" \
  --label "group-a" \
  --body-file "$(dirname "$0")/task-10-tailwind-config.md"

# Task 3: Header (Group B)
gh issue create --repo $REPO \
  --title "Task 3: Header Component" \
  --label "group-b,react-component" \
  --body-file "$(dirname "$0")/task-03-header.md"

# Task 5: FeaturedSection (Group B)
gh issue create --repo $REPO \
  --title "Task 5: FeaturedSection Component" \
  --label "group-b,react-component" \
  --body-file "$(dirname "$0")/task-05-featured-section.md"

# Task 6: AccordionItem (Group B)
gh issue create --repo $REPO \
  --title "Task 6: AccordionItem Component" \
  --label "group-b,react-component" \
  --body-file "$(dirname "$0")/task-06-accordion-item.md"

# Task 7: AccordionList (Group C)
gh issue create --repo $REPO \
  --title "Task 7: AccordionList Component" \
  --label "group-c,react-component" \
  --body-file "$(dirname "$0")/task-07-accordion-list.md"

# Task 9: App Container (Group D)
gh issue create --repo $REPO \
  --title "Task 9: App Container Component" \
  --label "group-d,react-component" \
  --body-file "$(dirname "$0")/task-09-app-container.md"

echo ""
echo "All issues created successfully!"
echo ""
echo "Issue Summary:"
echo "- Group A (Parallel): Tasks 1, 2, 4, 8, 10"
echo "- Group B (After A): Tasks 3, 5, 6"
echo "- Group C (After B): Task 7"
echo "- Group D (Final): Task 9"

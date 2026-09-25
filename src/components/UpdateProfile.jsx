
"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import {
  Button,
  Input,
  Label,
  Modal,
  TextField,
} from "@heroui/react";
import {
  BiEdit,
  BiImage,
  BiLoaderAlt,
  BiUser,
} from "react-icons/bi";

const UpdateUserModal = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);

    const name = formData.get("name");
    const image = formData.get("image");

    try {
      await authClient.updateUser({
        name,
        image,
      });

      // Close modal after successful update
      e.currentTarget.reset();
    } catch (error) {
      console.error("Update user error:", error);
      setError("Failed to update your information. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal>
      {/* ================= OPEN BUTTON ================= */}
      <Button
        className="
          h-11
          rounded-xl
          bg-[#0f4ea6]
          px-5
          font-semibold
          text-white
          shadow-md
          shadow-blue-500/20
          transition-all
          duration-300
          hover:-translate-y-0.5
          hover:bg-[#0c3e85]
          hover:shadow-lg
          hover:shadow-blue-500/25
        "
      >
        <BiEdit className="text-lg" />
        Update Information
      </Button>

      {/* ================= MODAL ================= */}
      <Modal.Backdrop
        className="bg-black/60 backdrop-blur-sm"
      >
        <Modal.Container placement="auto">
          <Modal.Dialog
            className="
              w-full
              overflow-hidden
              rounded-2xl
              border
              border-gray-200
              bg-white
              shadow-2xl
              sm:max-w-lg
            "
          >
            <Modal.CloseTrigger />

            {/* ================= HEADER ================= */}
            <Modal.Header
              className="
                border-b
                border-gray-100
                bg-gradient-to-r
                from-blue-50
                via-white
                to-cyan-50
                px-6
                py-5
              "
            >
              <Modal.Icon
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-xl
                  bg-blue-100
                  text-blue-600
                "
              >
                <BiUser className="size-6" />
              </Modal.Icon>

              <div className="ml-3">
                <Modal.Heading className="text-xl font-bold text-gray-900">
                  Update Profile
                </Modal.Heading>

                <p className="mt-1 text-sm text-gray-500">
                  Keep your profile information up to date.
                </p>
              </div>
            </Modal.Header>

            {/* ================= BODY ================= */}
            <Modal.Body className="px-6 py-6">
              <form
                onSubmit={onSubmit}
                className="flex flex-col gap-5"
              >
                {/* Name */}
                <TextField
                  className="w-full"
                  name="name"
                  type="text"
                  isRequired
                >
                  <Label className="mb-2 text-sm font-semibold text-gray-700">
                    Full Name
                  </Label>

                  <div
                    className="
                      flex
                      items-center
                      rounded-xl
                      border
                      border-gray-200
                      bg-gray-50
                      px-3
                      transition-all
                      duration-200
                      focus-within:border-blue-500
                      focus-within:bg-white
                      focus-within:ring-4
                      focus-within:ring-blue-100
                    "
                  >
                    <BiUser className="mr-2 shrink-0 text-lg text-gray-400" />

                    <Input
                      placeholder="Enter your full name"
                      className="w-full bg-transparent"
                    />
                  </div>
                </TextField>

                {/* Image URL */}
                <TextField
                  className="w-full"
                  name="image"
                  type="url"
                >
                  <Label className="mb-2 text-sm font-semibold text-gray-700">
                    Profile Image
                  </Label>

                  <div
                    className="
                      flex
                      items-center
                      rounded-xl
                      border
                      border-gray-200
                      bg-gray-50
                      px-3
                      transition-all
                      duration-200
                      focus-within:border-blue-500
                      focus-within:bg-white
                      focus-within:ring-4
                      focus-within:ring-blue-100
                    "
                  >
                    <BiImage className="mr-2 shrink-0 text-lg text-gray-400" />

                    <Input
                      placeholder="https://example.com/profile.jpg"
                      className="w-full bg-transparent"
                    />
                  </div>

                  <p className="mt-2 text-xs text-gray-400">
                    Enter a valid image URL for your profile picture.
                  </p>
                </TextField>

                {/* Error */}
                {error && (
                  <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                    {error}
                  </div>
                )}

                {/* ================= FOOTER ================= */}
                <Modal.Footer className="mt-2 flex w-full gap-3 border-t border-gray-100 px-0 pt-5">
                  <Button
                    type="button"
                    slot="close"
                    variant="secondary"
                    className="
                      h-11
                      flex-1
                      rounded-xl
                      border
                      border-gray-200
                      bg-white
                      font-semibold
                      text-gray-700
                      hover:bg-gray-50
                    "
                  >
                    Cancel
                  </Button>

                  <Button
                    type="submit"
                    slot="close"
                    isDisabled={loading}
                    className="
                      h-11
                      flex-1
                      rounded-xl
                      bg-[#0f4ea6]
                      font-semibold
                      text-white
                      shadow-md
                      shadow-blue-500/20
                      transition-all
                      hover:bg-[#0c3e85]
                    "
                  >
                    {loading ? (
                      <>
                        <BiLoaderAlt className="animate-spin text-lg" />
                        Saving...
                      </>
                    ) : (
                      <>
                        <BiEdit className="text-lg" />
                        Save Changes
                      </>
                    )}
                  </Button>
                </Modal.Footer>
              </form>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default UpdateUserModal;


